import ModalForm from '../../../components/ModalForm/ModalForm';
import NewAreaForm from '../../../components/NewAreaForm/NewAreaForm';

const AreasPageDashboard = () => {
    return (
        <div>
            <p>Areas Page List</p>
            <ModalForm name="Area" form={<NewAreaForm />} />
        </div>
    )
}

export default AreasPageDashboard