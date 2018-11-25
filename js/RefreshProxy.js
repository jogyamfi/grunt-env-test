class RefreshProxy {
  

  refreshAccessToken(){
    alert('access token called');
    window.PedigreeToolApp.setAccessToken("");
  }
}

const refreshProxy = new RefreshProxy();

window.refreshProxy = refreshProxy;

export default refreshProxy;