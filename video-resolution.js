var player = videojs('player', {
  plugins: {
    videoJsResolutionSwitcher: {
      default: '480',
      dynamicLabel: true
    }
  }
});
