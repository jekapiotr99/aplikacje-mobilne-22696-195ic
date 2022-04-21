import React ,{Component ,Suspense}  from 'react';
import { View, Text} from 'react-native';

import styles from '../../styles/styles';

const Lazy = React.lazy(() => import('./LazyLoad'))

export default function Tab2({ navigation }) {
    return (
        <View style={styles.loadContainer}>
            <View style = {styles.loadEx}>
                <Suspense fallback={<Text>Loading...</Text>}>
                    <Lazy length="100000"/>
                </Suspense>
            </View>
        </View>
    );
}