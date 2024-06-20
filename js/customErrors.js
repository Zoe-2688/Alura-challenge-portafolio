export const tiposError = [
    "valueMissing", "typeMismatch",
    "patternMismatch", "tooShort", "customError",
];

export const mensajes = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un nombre válido.",
        tooShort: "Por favor, ingrese un nombre válido.",
    },
    email: {
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "Por favor, ingrese un email válido.",
        tooShort: "Por favor, ingrese un e-mail válido.",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un mensaje válido.",
        tooShort: "El campo no tiene caracteres suficientes.",
    },
    mensaje: {
        valueMissing: "Debes ingresar un mensaje, no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un mensaje válido.",
    }
};