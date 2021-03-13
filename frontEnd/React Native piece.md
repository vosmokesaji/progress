# React Native 代码片段

## rn 滚动动画
```jsx
constructor(props:propsFace) {
    super(props);

    this.state = {
        sceneScrollY: new Animated.Value(0)
    };
}

<Animated.View style={{
    backgroundColor: "#801710",
    height: px(100),
    width: px(375),
    position: "absolute",
    bottom: 0,
    left: 0,

    opacity: this.state.sceneScrollY.interpolate({
        inputRange: [px(20), px(60)],
        outputRange: [0, 1]
    })
}}/>


<Animated.ScrollView
    scrollEventThrottle={32}
    style={styles.scrollBox}
    onScroll={Animated.event([{
        nativeEvent: {
            contentOffset: {
                y: this.state.sceneScrollY
            }
        }}])
    }
>
...
</Animated.ScrollView>
```