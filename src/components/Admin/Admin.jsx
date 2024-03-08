import { Tabs } from 'antd';
import AddProperty from './Screen/AddProperty';
import PropertyTable from './Tables/PropertyTable';
import UserTable from './Tables/UserTable';
import Bookingtable from './Tables/Bookingtables';

const { TabPane } = Tabs;

function Adminscreen() {
  const renderWelcomeMessage = () => {
    return (
      <div className='welcome-container'>
        <h1 className='welcome-message'>Avenu Reality Panel</h1>
        <p className='welcome-message'>
          Manage Poperties, bookings, and user profiles .
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className='ml-5 mt-3 mr-5 mb-5 bsx'>
        
        <Tabs defaultActiveKey='1' tabPosition='left'>
          <TabPane tab='Admin' key='1'>
            {renderWelcomeMessage()}
          </TabPane>
          <TabPane tab='Add Property' key='2'>
            <AddProperty/>
          </TabPane>
          <TabPane tab='Properties' key='3'>
            <PropertyTable/>
          </TabPane>
          <TabPane tab='Bookings' key='6'>
            <Bookingtable/>
          </TabPane>
          <TabPane tab='Users' key='7'>
            <UserTable/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Adminscreen;