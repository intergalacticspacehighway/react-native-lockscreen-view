import ExpoModulesCore

public class ReactNativeLockscreenViewModule: Module {
  public func definition() -> ModuleDefinition {

    Name("ReactNativeLockscreenView")

    View(ReactNativeLockscreenView.self) {
      Events(
        "onReset"
      )
    }
  }
}
