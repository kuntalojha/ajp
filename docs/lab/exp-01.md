---
outline: deep
---

# Experiment 01: Login Form

## Question:
- Develop a program to create login form using Swing Component.

## Program:
```java
import javax.swing.*;
import java.awt.*;

public class LoginForm {

    public static void main(String[] args) {

        // Create a frame
        JFrame frame = new JFrame("Login Form");

        // Create components
        JLabel userLabel = new JLabel("Username:");
        JTextField userField = new JTextField(15);

        JLabel passLabel = new JLabel("Password:");
        JPasswordField passField = new JPasswordField(15);

        JButton loginButton = new JButton("Login");

        JLabel message = new JLabel("");

        // Set layout
        frame.setLayout(new FlowLayout());

        // Add components to frame
        frame.add(userLabel);
        frame.add(userField);

        frame.add(passLabel);
        frame.add(passField);

        frame.add(loginButton);

        frame.add(message);

        // Action for Login button
        loginButton.addActionListener(e -> {

            String username = userField.getText();
            String password = new String(passField.getPassword());

            if (username.equals("admin") && password.equals("1234")) {
                message.setText("Login Successful");
            } else {
                message.setText("Invalid Username or Password");
            }
        });

        // Frame properties
        frame.setSize(250, 180);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
```

## Output:
![exp-01](/img/exp-01.png)