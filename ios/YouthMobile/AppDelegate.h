#import <UserNotifications/UNUserNotificationCenter.h> //here for local push notification
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

// here for local push notification, add the 'UNUserNotificationCenterDelegate' to protocols
@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
