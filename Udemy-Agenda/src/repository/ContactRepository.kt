package repository

import entity.ContactEntity

class ContactRepository {
    companion object {
        private val contactList = mutableListOf<ContactEntity>()

        fun save(contact: ContactEntity) {
            contactList.add(contact)
        }

        fun delete(contact: ContactEntity) {
            var index = -1;

            for (savedContact in getList().withIndex()) {
                if (savedContact.value.name == contact.name && savedContact.value.phone == contact.phone) {
                    index = savedContact.index;
                    break;
                }
            }

            if (index != -1) {
                contactList.removeAt(index);
            }
        }

        fun getList() : List<ContactEntity>{
            return contactList
        }
    }
}