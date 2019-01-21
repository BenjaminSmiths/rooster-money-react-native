// Detail page with a destination shared element
import { SharedElement } from 'react-native-motion';

class DetailPage extends Component {
    render() {
        return (
            <SharedElement sourceId="source">
                <View>{listItemNode}</View>
            </SharedElement>
        );
    }
}