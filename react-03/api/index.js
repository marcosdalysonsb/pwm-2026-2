import axios from "axios";

const headerJson = { "Content-Type": "application/json" };

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  timeout: 5000,
  headers: {
    "X-Parse-Application-Id": "trdTq2pgqqrFJtmeKX6vt5PkR0ChrHJfmXwXc98Y",
    "X-Parse-REST-API-Key": "zsYznxmw4mzDCoLi97l5iIR5FYF9yALFOzPHjvF2",
  },
});

export async function getTarefas() {
  const response = await instance.get("/classes/Tarefa");
  return response.data;
}

export async function addTarefas(descricao) {
  return await instance.post(
    "/classes/Tarefa",
    {
      descricao: descricao,
    },
    {
      headers: headerJson,
    },
  );
}

export async function updateTarefas({ objectId, concluida }) {
  return await instance.put(
    `/classes/Tarefa/${objectId}`,
    {
      concluida: concluida,
    },
    {
      headers: headerJson,
    },
  );
}

export async function deleteTarefas({ objectId }) {
  return await instance.delete(`/classes/Tarefa/${objectId}`);
}
