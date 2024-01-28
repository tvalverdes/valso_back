import multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

export const multerMiddleware = upload.single('vehicleImage')

/* app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
  const uploadedFile = req.file

  if (uploadedFile) {
    // Ahora puedes acceder al buffer del archivo
    const fileContentBuffer = uploadedFile.buffer

    // Realiza las operaciones que necesitas con el contenido del archivo
    // ...

    // Envía una respuesta al cliente
    res.send('Archivo recibido con éxito')
  } else {
    res.status(400).send('No se proporcionó ningún archivo')
  }
}) */