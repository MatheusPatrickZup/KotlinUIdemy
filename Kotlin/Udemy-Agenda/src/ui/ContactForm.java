package ui;

import business.ContactBusiness;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ContactForm extends JFrame {
    private JPanel rootPanel;
    private JTextField nameField;
    private JLabel nameLabel;
    private JLabel contactLabel;
    private JTextField contactField;
    private JButton btnCancel;
    private JButton btnSave;
    private JPanel buttonPanel;

    private ContactBusiness mContactBusiness;

    public ContactForm() {
        mContactBusiness = new ContactBusiness();

        setContentPane(rootPanel);
        setSize(500, 250);
        setVisible(true);

        Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
        setLocation(dim.width / 2 - getSize().width / 2, dim.height / 2  - getSize().height / 2);
        setListeners();
    }

    protected void setListeners() {
        btnSave.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String name = nameField.getText();
                String phone = contactField.getText();

                try {
                    mContactBusiness.save(name, phone);
                    new MainForm();
                    dispose();
                } catch (Exception exception) {
                    JOptionPane.showMessageDialog(null, exception.getMessage());
                }
            }
        });

        btnCancel.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new MainForm();
                dispose();
            }
        });
    }
}
