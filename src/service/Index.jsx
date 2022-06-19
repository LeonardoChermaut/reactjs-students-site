// export const urlSubject =
//   "https://secret-headland-69654.herokuapp.com/materias/";
// export const urlStudents =
//   "https://secret-headland-69654.herokuapp.com/alunos/";

// export const getSubject = () => {
//   axios.get(urlSubject).then((response) => {
//     setResposta(response.data);
//   });
// };

// export const postSubject = (e) => {
//   e.preventDefault();
//   const postBodyRequest = {
//     titulo,
//     professor_nome,
//   };
//   axios.post(urlSubject, postBodyRequest).then((response) => {
//     setResposta(response);
//   });
// };

// export const updateSubject = async (id) => {
//   const putBodyRequest = {
//     id,
//     titulo,
//     professor_nome,
//   };
//   await axios
//     .put(urlSubject, {
//       data: putBodyRequest,
//     })
//     .then((response) => {
//       setResposta(response);
//       setList((oldList) => oldList.filter((item) => item.id));
//     });
// };

// export const deleteSubject = async (id) => {
//   const delBodyRequest = {
//     id,
//     titulo,
//     professor_nome,
//   };
//   await axios.delete(urlStudents, {
//     data: delBodyRequest,
//   });

//   setList((oldList) => oldList.filter((item) => item.id));
// };

// export const getUser = () => {
//   axios.get(urlStudents).then((response) => {
//     setList(response.data);
//   });
// };

// export const postUser = (e) => {
//   e.preventDefault();
//   const postBodyRequest = {
//     nome,
//     cidade,
//     idade,
//   };
//   axios.post(urlStudents, postBodyRequest).then((response) => {
//     setResposta(response);
//   });
// };

// export const deleteUser = async (id) => {
//   const delBodyRequest = {
//     id,
//     nome,
//     cidade,
//     idade,
//   };
//   await axios
//     .delete(urlStudents, {
//       data: delBodyRequest,
//     })
//     .then((response) => {
//       setResposta(response);
//       setList((oldList) => oldList.filter((item) => item.id));
//     });
// };

// export const updateUser = async (id) => {
//   const putBodyRequest = {
//     id,
//     nome,
//     cidade,
//     idade,
//   };
//   await axios
//     .put(urlStudents, {
//       data: putBodyRequest,
//     })
//     .then((response) => {
//       setResposta(response);
//       setList((oldList) => oldList.filter((item) => item.id));
//     });
// };
