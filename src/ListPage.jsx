// List items page with source of SharedElement
import { SharedElement } from 'react-native-motion';

class ListPage extends Component {
    render() {
        return (
            <SharedElement id="source">
                <View>{listItemNode}</View>
            </SharedElement>
        );
    }
}