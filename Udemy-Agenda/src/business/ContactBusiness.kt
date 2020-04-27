package business

import entity.ContactEntity
import repository.ContactRepository

class ContactBusiness {
    fun save(name: String, phone:String) {
        saveValidations(name, phone);

        val contact = ContactEntity(name, phone);
        ContactRepository.save(contact);
    }

    fun delete(name: String, phone:String) {
        deleteValidations(name, phone);

        val contact = ContactEntity(name, phone);
        ContactRepository.delete(contact);
    }

    fun getList() : List<ContactEntity>{
        return ContactRepository.getList()
    }

    fun getContactCountDescription() : String {
        val list = getList();

        return when {
            list.isEmpty() -> ""
            else -> "${list.size} contacts"
        }
    }

    private fun saveValidations(name: String, phone: String) {
        if (name == "") {
            throwRequiredException("Name")
        }

        if (phone == "") {
            throwRequiredException("Phone")
        }
    }

    private fun deleteValidations(name: String, phone:String) {
        if (name == "" || phone == "") {
            throw java.lang.Exception("There is no valid contact selected!")
        }
    }

    private fun throwRequiredException(fieldName: String) {
        throw Exception("$fieldName is a required field.");
    }
}