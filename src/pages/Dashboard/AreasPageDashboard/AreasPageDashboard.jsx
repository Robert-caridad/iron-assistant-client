import AreasDetailList from '../../../components/AreasDetailList/AreasDetailList';
import ModalForm from '../../../components/ModalForm/ModalForm';
import NewAreaForm from '../../../components/NewAreaForm/NewAreaForm';

const AreasPageDashboard = () => {
    return (
        <div>
            <p>Areas Page List</p>
            <ModalForm name="Area" form={<NewAreaForm />} />
            <AreasDetailList />
        </div>
    )
}

export default AreasPageDashboard