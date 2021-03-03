import React, { Component } from "react";
import Modal from "../../UI/Modal/Modal";
import Aux from "../auxfile";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };
    //ovo se poziva svaki put kad je neka komponenta wrappana s ovom. Ne zelimo svaki put krenirati interceptore, a da ostali jos uviijek postoje iako te komponenete vise ne koristimo
    //zato dole koristimo eject
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    //maknemo interceptore kako bi se sprijecio memory leak
    componentWillUnmount() {
      console.log("Will Unmount", this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    errorConfirmed = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmed}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
