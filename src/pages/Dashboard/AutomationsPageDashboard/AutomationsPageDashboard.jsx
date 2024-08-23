import CardsAutomationDetail from '../../../components/CardsAutomationDetail/CardsAutomationDetail';
import ModalForm from '../../../components/ModalForm/ModalForm';
import NewAutomationForm from '../../../components/NewAutomationForm/NewAutomationForm';

const AutomationsPageDashboard = () => {

    return (
        <div>
            <p>Automation Page List</p>
<<<<<<< HEAD
            <ModalForm name="Automation" form={<NewAutomationForm />} />
=======
            <ModalForm name="Automation" form="AutomationForm" />
            <CardsAutomationDetail />
>>>>>>> 06515ab9a285f23f344efe1cc3803bcca9b91602
        </div>
    )
}

export default AutomationsPageDashboard