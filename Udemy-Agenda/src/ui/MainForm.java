package ui;

import business.ContactBusiness;
import entity.ContactEntity;

import javax.swing.*;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;

public class MainForm  extends JFrame {
    private JPanel rootPanel;
    private JButton addButton;
    private JButton deleteButton;
    private JTable contactsTable;
    private JLabel contactCount;

    private ContactBusiness mContactBusiness;
    private String selectedName;
    private String selectedPhone;

    public MainForm() {
        setContentPane(rootPanel);
        setSize(500, 250);
        setVisible(true);

        Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
        setLocation(dim.width / 2 - getSize().width / 2, dim.height / 2  - getSize().height / 2);

        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        setListeners();
        loadContacts();
    }

    private void setListeners() {
        addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new ContactForm();
                dispose();
            }
        });

        contactsTable.getSelectionModel().addListSelectionListener(new ListSelectionListener() {
            @Override
            public void valueChanged(ListSelectionEvent e) {
                if (!e.getValueIsAdjusting()) {
                    return;
                }

                int selectedRow = contactsTable.getSelectedRow();

                selectedName = contactsTable.getValueAt(selectedRow, 0).toString();
                selectedPhone = contactsTable.getValueAt(selectedRow, 1).toString();
            }
        });

        deleteButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    mContactBusiness.delete(selectedName, selectedPhone);
                    loadContacts();

                    selectedName = null;
                    selectedPhone = null;
                } catch (Exception exception) {
                    JOptionPane.showMessageDialog(null, exception.getMessage());
                }
            }
        });
    }

    private void loadContacts() {
        mContactBusiness = new ContactBusiness();
        List<ContactEntity> contactList = mContactBusiness.getList();
        String[] columnNames = {"Name", "Phone"};
        DefaultTableModel model = new DefaultTableModel(new Object[0][0], columnNames);

        for (ContactEntity contact : contactList) {
            Object[] contactObject = new Object[2];

            contactObject[0] = contact.getName();
            contactObject[1] = contact.getPhone();

            model.addRow(contactObject);
        }

        contactsTable.clearSelection();
        contactsTable.setModel(model);
        contactCount.setText(mContactBusiness.getContactCountDescription());
    }
}
