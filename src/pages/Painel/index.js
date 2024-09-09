import React from "react";
import { WebView as RNWebView } from "react-native-webview";
import {
  RefreshControl,
  ScrollView,
  BackHandler,
  StyleSheet,
  Platform,
  AsyncStorage,
} from "react-native";
import Loading from "../../components/Loading";
import AppConfig from "../../AppConfig";
import BottomBar from "../../components/BottomBar";
import App from "../../../App";

const INJECTED_JS = `
  window.onscroll = function() {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop
      }),     
    )
  }
`;

const SCROLLVIEW_CONTAINER = {
  flex: 1,
  height: "100%",
};

const WEBVIEW = (height) => ({
  width: "100%",
  height,
});

export default class WebViewPainel extends React.Component {
  state = {
    uri: AppConfig.UrlPainel,
    loadingVisible: true,
    isPullToRefreshEnabled: false,
    scrollViewHeight: 0,
    canGoBack: false,
    colorTheme: AppConfig.ColorTheme,
  };

  setWebViewRef = (ref) => {
    this.webView = ref;
  };

  onRefresh = () => this.webView.reload();

  showSpinner() {
    this.setState({ loadingVisible: true });
  }

  hideSpinner() {
    this.setState({ loadingVisible: false });
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.webView.startUrl == this.state.uri) BackHandler.exitApp();
    this.webView.goBack();
    return true;
  };

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  }

  onBack() {
    this.webView.goBack();
  }

  onWebViewMessage = (e) => {
    const { data } = e.nativeEvent;

    try {
      const { scrollTop } = JSON.parse(data);
      this.setState({ isPullToRefreshEnabled: scrollTop === 0 });
    } catch (error) {}
  };

  render() {
    const { scrollViewHeight, isPullToRefreshEnabled } = this.state;

    return (
      <>
        <ScrollView
          style={[SCROLLVIEW_CONTAINER]}
          onLayout={(e) =>
            this.setState({ scrollViewHeight: e.nativeEvent.layout.height })
          }
          contentContainerStyle={styles.contentContainer}
          refreshControl={
            <RefreshControl
              refreshing={false}
              enabled={isPullToRefreshEnabled}
              onRefresh={this.onRefresh}
              tintColor={this.state.colorTheme}
              colors={[this.state.colorTheme]}
              style={{ backgroundColor: "transparent" }}
            />
          }
        >
          <Loading
            loading={this.state.loadingVisible}
          />
          <RNWebView
            allowsBackForwardNavigationGestures
            userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36" 
            source={{ uri: this.state.uri }}
            ref={this.setWebViewRef}
            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            style={[{ marginBottom: 0 }, WEBVIEW(scrollViewHeight)]}
            onMessage={this.onWebViewMessage}
            injectedJavaScript={INJECTED_JS}
            onLoadStart={() => this.showSpinner()}
            onLoad={() => this.hideSpinner()}
            onError={() => this.props.navigation.navigate("NetworkError")}
          />
        </ScrollView>
        <BottomBar active="Painel" navigation={this.props.navigation} />
      </>
    );
  }
}

const styles = () =>
  StyleSheet.create({
    container: {
      paddingBottom: 50,
      zIndex: 1,
    },
    contentContainer: {
      paddingBottom: Platform.OS == "ios" ? 50 : 0,
    },
  });
