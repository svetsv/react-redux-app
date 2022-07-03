import httpService from "./http.service";
import { nanoid } from "nanoid";
const todosEndepoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  post: async () => {
    const { data } = await httpService.post(todosEndepoint, {
      id: nanoid(),
      title: "some new title",
      completed: false,
    });
    return data;
  },
};
export default todosService;
