// Use { } for Named Exports (without a default)
import {Button} from '@/constituents/userinterfaces'

export default function Application() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1>Welcome to Main Application</h1>
      <div className='flex flex-row'>
        <Button href='/dashboard' text='Go to Dashboard'/>
      </div>
    </div>
  );
}
