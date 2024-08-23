import CardsAutomationDetail from '../../../components/CardsAutomationDetail/CardsAutomationDetail';
import ModalForm from '../../../components/ModalForm/ModalForm';

const AutomationsPageDashboard = () => {

    return (
        <div>
            <p>Automation Page List</p>
            <ModalForm name="Automation" form="AutomationForm" />
            <CardsAutomationDetail />
        </div>
    )
}

export default AutomationsPageDashboard