import { ClientComponent } from './components/ClientComponent';
import { ServerComponent } from './components/ServerComponent';

export default async function Home() {
  return (
    <ServerComponent>
      <ClientComponent />
    </ServerComponent>
  )
}
