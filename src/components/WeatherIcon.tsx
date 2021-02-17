import { Image } from 'react-bootstrap'
export default ({ icon }: { icon: string }) => (
    <Image fluid src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
)