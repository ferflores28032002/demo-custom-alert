import Swal from "sweetalert2";

const App = () => {
  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Verificación de correo",
      text: "Se ha enviado un correo de verificación a tu dirección de correo electrónico. Por favor, sigue las instrucciones para completar el proceso.",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "swal-modal",
        title: "swal-title",
        confirmButton: "swal-button swal-confirm-button",
        cancelButton: "swal-button swal-cancel-button",
        htmlContainer: "swal-html-container",
      },
      iconColor: "#FFCC33",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },

      // al ocultar el alerta se ejecuta la animación
      // hideClass: {
      //   popup: `
      //     animate__animated
      //     animate__fadeOutDown
      //     animate__faster
      //   `,
      // },
    });
  };

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Ha ocurrido un error al enviar el correo de verificación. Por favor, inténtalo de nuevo.",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "swal-modal",
        title: "swal-title",
        confirmButton: "swal-button swal-confirm-button",
        cancelButton: "swal-button swal-cancel-button",
        htmlContainer: "swal-html-container",
      },
      iconColor: "#FF6B6B",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
    });
  };

  const warningAlert = () => {
    Swal.fire({
      icon: "warning",
      title: "Advertencia",
      text: "¿Estás seguro de que deseas eliminar este archivo? Esta acción no se puede deshacer.",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "swal-modal",
        title: "swal-title",
        confirmButton: "swal-button swal-confirm-button",
        cancelButton: "swal-button swal-cancel-button",
        htmlContainer: "swal-html-container",
      },
      iconColor: "#FFCC33",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
    });
  };

  return (
    <div>
      <button className="swal-button" onClick={successAlert}>
        Mostrar Alerta de Éxito
      </button>
      <button className="swal-button" onClick={errorAlert}>
        Mostrar Alerta de Error
      </button>
      <button className="swal-button" onClick={warningAlert}>
        Mostrar Alerta de Advertencia
      </button>
    </div>
  );
};

export default App;
