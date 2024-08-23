import CardsDeviceDetail from '../../../components/CardsDeviceDetail/CardsDeviceDetail';
import ModalForm from '../../../components/ModalForm/ModalForm';
import NewDeviceForm from '../../../components/NewDeviceForm/NewDeviceForm';

const DevicesPageDashboard = () => {

    return (
        <div>
            <p>Device Page List</p>
            <ModalForm name="Devices" form={<NewDeviceForm />} />
            <CardsDeviceDetail />
        </div>
    )
}

export default DevicesPageDashboard