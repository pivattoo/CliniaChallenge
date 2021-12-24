import * as React from 'react';
import {
  AppBar,
  Checkbox,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Stack,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Slide,
  Dialog,
  Button,
  Divider,
  ListItemText,
  ListItem,
  List
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Book,
  FavoriteBorder,
  Favorite
} from '@mui/icons-material';

/* Livros */
import books from '../data/books.json'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const livros = books;
var favoritos = [];
const theme = createTheme();


function AddFavBook(title) {
  favoritos.push(title);
}

function CardBook({ titulo, autor, img, descricao, publicacao, genero }) {
  return (
    <Card sx={{ height: '15%', display: 'flex', flexDirection: 'column', marginBottom: '10px', marginLeft: '10%' }}>
      <CardMedia
        component="img"
        sx={{
          pt: '0%',
        }}
        image={img}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 2 }}>
        <Typography variant="h5" component="h2"><b>{titulo}</b> {autor}</Typography>
        <Typography gutterBottom>Gênero: {genero} - {publicacao}</Typography>
        <Typography>{descricao}</Typography>
      </CardContent>
      <CardActions>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={() => AddFavBook({ titulo })} />
      </CardActions>
    </Card>
  )
}


export default function Main() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Header */}
      <AppBar position="relative">
        <Toolbar>
          <Book sx={{ mr: 2 }} />
          <Typography Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Biblioteca</Typography>
          <div>
            <Button variant="outlined" sx={{ color: '#FFF' }} onClick={handleClickOpen}>
              Favoritos
            </Button>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Favoritos
                  </Typography>
                </Toolbar>
              </AppBar>
              <List>
                {favoritos.map((fav, index) =>
                  <>
                    <ListItem key={index}>
                      <ListItemText>{fav.titulo}</ListItemText>
                    </ListItem>
                    <Divider />
                  </>)}
              </List>
            </Dialog>
          </div>
        </Toolbar>
      </AppBar>


      {/* List Books */}
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.secundary"
            >Desenvolvido por</Typography>
            <Typography variant="h3" align="center" color="text.primary" paragraph>
              Guilherme Pivatto
            </Typography>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 2 }} maxWidth="sm">
          <Grid container spacing={4}>
            {livros.map((livro, index) => <CardBook key={index} titulo={livro.title} autor={livro.author} img={livro.image} descricao={livro.description} genero={livro.genre} publicacao={livro.published} />)}
          </Grid>
        </Container>
      </main>


      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 4 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Desafio Clinia
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Desenvolvido em ReactJS
        </Typography>
      </Box>
    </ThemeProvider>
  );
}