var player = videojs('player', {
  plugins: {
    videoJsResolutionSwitcher: {
      default: 'low',
      dynamicLabel: true
    }
  }
});
