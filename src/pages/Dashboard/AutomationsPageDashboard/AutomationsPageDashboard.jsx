import AutomationsDetailList from '../../../components/AutomationsDetailList/AutomationsDetailList';
import ModalForm from '../../../components/ModalForm/ModalForm';
import NewAutomationForm from '../../../components/NewAutomationForm/NewAutomationForm';

const AutomationsPageDashboard = () => {

    return (
        <div>
            <p>Automation Page List</p>
            <ModalForm name="Automation" form={<NewAutomationForm />} />
            <AutomationsDetailList />
        </div>
    )
}

export default AutomationsPageDashboard