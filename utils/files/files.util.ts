export const getExtensionByFileName = (fileName: string) => fileName.match(/\.([^.]+)$/)?.[1];

export const isImage = (name: string) =>  {
    const extensionesImagen = /(jpg|jpeg|png|gif|bmp|svg)$/i
    return extensionesImagen.test(name.toLowerCase())
}