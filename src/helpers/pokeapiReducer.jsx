export const initialState = {
  error: "",
  pokemon: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        error: "",
        pokemon: action.pokemon,
      };
    case "notFound":
      return {
        ...state,
        error: "No se encontró un Pokémon con ese nombre",
      };
    case "emptyField":
      return {
        ...state,
        error: "Por favor ingrese algo en el campo de búsqueda",
      };
    default:
      return {
        ...state,
        error: "",
        pokemon: null,
      };
  }
};
