import CardsAreaDetail from '../../../components/CardsAreaDetail/CardsAreaDetail';
import ModalForm from '../../../components/ModalForm/ModalForm';
import NewAreaForm from '../../../components/NewAreaForm/NewAreaForm';

const AreasPageDashboard = () => {
    return (
        <div>
            <p>Areas Page List</p>
            <ModalForm name="Area" form={<NewAreaForm />} />
            <CardsAreaDetail />
        </div>
    )
}

export default AreasPageDashboard