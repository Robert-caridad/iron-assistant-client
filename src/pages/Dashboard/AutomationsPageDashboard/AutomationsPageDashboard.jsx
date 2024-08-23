import CardsAutomationDetail from '../../../components/CardsAutomationDetail/CardsAutomationDetail';
import ModalForm from '../../../components/ModalForm/ModalForm';
import NewAutomationForm from '../../../components/NewAutomationForm/NewAutomationForm';

const AutomationsPageDashboard = () => {

    return (
        <div>
            <p>Automation Page List</p>
            <ModalForm name="Automation" form={<NewAutomationForm />} />
            <CardsAutomationDetail />
        </div>
    )
}

export default AutomationsPageDashboard