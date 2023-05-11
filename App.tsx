import React from 'react';
import {
  Linking,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import Carousel from 'pinar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';

const LINKS = [
  {
    key: 1,
    url: 'https://www.amazon.com/-/de/dp/B07N3RFXRL/ref=pd_ci_mcx_mh_ci_mcx_mr_mp_m_0?pd_rd_w=C8JmI&content-id=amzn1.sym.07889413-fea5-4a13-b06c-d39edf4aa03e&pf_rd_p=07889413-fea5-4a13-b06c-d39edf4aa03e&pf_rd_r=49PVZJ7PQETKW6WJ8R3N&pd_rd_wg=I909t&pd_rd_r=74e6ce3d-f18f-4e84-b9a5-b9073478d5e0&pd_rd_i=B07N3RFXRL&th=1',
  },
  {
    key: 2,
    url: 'https://www.youtube.com/watch?v=LbWjVNjlpjA',
  },
  {
    key: 3,
    url: 'https://www.spiegel.de/',
  },
];

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleOpenUrl = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={{ ...backgroundStyle, ...styles.containerStyle }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Carousel loop>
        {LINKS.map(link => (
          <Pressable
            key={link.key}
            onPress={() => handleOpenUrl(link.url)}
            style={styles.embeddedPageStyle}>
            <WebView
              source={{
                uri: link.url,
              }}
            />
          </Pressable>
        ))}
      </Carousel>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  embeddedPageStyle: {
    flex: 1,
  },
});

export default App;
