import Footer from "components/Common/Footer";
import Header from "components/Common/Header";
import ScrollToTop from "components/Common/ScrollToTop";
import Browse from "features/browse";
import Detail from "features/detail";
import Discover from "features/discover";
import Topbar from "features/topbar";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "styles/index.scss";
import "styles/variables.css";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/thumbs/thumbs.scss";
import "swiper/swiper.scss";

function App() {
    return (
        <div className="app">
            <Header />
            <Topbar />
            <ScrollToTop />
            <div className="wrapper">
                <div className="container">
                    <Switch>
                        <Route path="/detail/:id" component={Detail} />
                        <Route path='/browse' component={Browse} />
                        <Route path='/' component={Discover} exact />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
