import ExpoModulesCore

class ReactNativeLockscreenView: ExpoView {
  var childView: UIView? = nil;
  let onReset = EventDispatcher()
        
  override func didMoveToWindow() {
    let notificationCenter = NotificationCenter.default
    notificationCenter.addObserver(self, selector: #selector(appMovedToBackground), name: UIApplication.didEnterBackgroundNotification, object: nil)
  }

  override func removeReactSubview(_ subview: UIView!) {
    childView = nil
    super.removeReactSubview(subview)
    onReset();
  }
  
  override func addSubview(_ view: UIView) {
    childView = view;
  }

  @objc func appMovedToBackground() {
    if (childView != nil) {
        self.insertSubview(childView!, at:0)
    }
  }
}
