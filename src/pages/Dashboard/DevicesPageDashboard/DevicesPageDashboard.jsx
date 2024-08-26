import DevicesDetailList from '../../../components/DevicesDetailList/DevicesDetailList';
import ModalForm from '../../../components/ModalForm/ModalForm';
import NewDeviceForm from '../../../components/NewDeviceForm/NewDeviceForm';

const DevicesPageDashboard = () => {

    return (
        <div>
            <p>Device Page List</p>
            <ModalForm name="Devices" form={<NewDeviceForm />} />
            <DevicesDetailList />
        </div>
    )
}

export default DevicesPageDashboard