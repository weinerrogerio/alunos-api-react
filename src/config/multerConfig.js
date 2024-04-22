import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      try {
        cb(null, resolve(__dirname, '..', '..', 'uploads'));// salvando onde?  na pasta de uploads(antes de mandar pra base)
      } catch (e) {
        console.log(e);
      }
    },
    // modificando o nome do arquivo recebido(nao da pra confiar que o arquivo virá com nome).
    // extname(...) extrai o formato da image, jpg, png, etc
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
