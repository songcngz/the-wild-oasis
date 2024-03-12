import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";


function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Create new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
  //   const [showForm, setShowForm] = useState(false);
  //   return (
  //     <>
  //       <Button onClick={() => setShowForm((show) => !show)}>
  //         Add new cabin
  //       </Button>
  //       {showForm && (
  //         <Modal onCloseModal={() => setShowForm((show) => !show)}>
  //           <CreateCabinForm onClose={() => setShowForm((show) => !show)} />
  //         </Modal>
  //       )}
  //     </>
  //   );
}

export default AddCabin;
