import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Titulo from "./Titulo";
import GridIzquierdo from "./GridIzquierdo";

import { showLoading, hideLoading, updateLoading } from "loading-request";

function Formulario() {
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (dataForm) => {
    showLoading({
      message: "Enviando Formulario...",
      spinnerColor: "#7366ff",
      textLoadingColor: "#7366ff",
      textLoadingSize: "18px",
    });

    try {
      // Simulación de envío a una API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });

      if (response.ok) {
        // Actualizar el estado de los datos
        setData(dataForm);

        // Actualizar el loading con mensaje de éxito
        updateLoading({
          message: "¡Formulario enviado exitosamente!",
          spinnerColor: "#10b981",
          textLoadingColor: "#10b981",
        });

        // Esperar 2 segundos antes de ocultar el loading y limpiar el formulario
        setTimeout(async () => {
          await hideLoading();
          reset(); // Limpiar el formulario
        }, 2000);
      } else {
        console.log("Error al enviar el formulario");
      }
    } catch (error) {
      // Actualizar el loading con mensaje de error
      updateLoading({
        message: "Error al enviar el formulario",
        spinnerColor: "#ef4444",
        textLoadingColor: "#ef4444",
      });

      // Esperar 2 segundos antes de ocultar el loading
      setTimeout(async () => {
        await hideLoading();
      }, 2000);

      console.error("Error:", error);
    } finally {
      hideLoading();
    }
  };

  return (
    <div className="row justify-content-md-center">
      <Titulo />
      <GridIzquierdo data={data} />

      <div className="col-md-7">
        <h2 className="text-center mb-3 fw-bold">
          Información del Empleado <hr />
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre del Empleado:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              {...register("nombre", { required: true })}
            />
            {errors.nombre && (
              <span className="text-danger">Este campo es requerido</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono del Empleado:
            </label>
            <input
              type="number"
              className="form-control"
              id="telefono"
              name="telefono"
              {...register("telefono")}
            />
            {errors.telefono && (
              <span className="text-danger">Este campo es requerido</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="sexo" className="form-label">
              Sexo del Empleado:
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexoMasculino"
                value="masculino"
                {...register("sexo")}
              />
              <label className="form-check-label" htmlFor="sexoMasculino">
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexoFemenino"
                value="femenino"
                {...register("sexo")}
              />
              <label className="form-check-label" htmlFor="sexoFemenino">
                Femenino
              </label>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn_add" type="submit">
              Enviar Formulario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
