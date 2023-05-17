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
        pokemon: null,
      };
    default:
      return {
        ...state,
        error: "",
        pokemon: null,
      };
  }
};
