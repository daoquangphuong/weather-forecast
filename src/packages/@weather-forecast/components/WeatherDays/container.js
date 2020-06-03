import { compose, hoc, useStore } from '@';
import { $weatherDays } from '../../stores';

const container = compose(
    hoc(props => {
        const [weatherDays] = useStore([$weatherDays]);

        return {
            weatherDays,
            ...props
        };
    })
);

export default container;
