var player = videojs('player', {
  plugins: {
    videoJsResolutionSwitcher: {
      default: '480p',
      dynamicLabel: true
    }
  }
});
