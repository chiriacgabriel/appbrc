package com.app.brc.brandcomputer.accounting.provider.validator;

import com.app.brc.brandcomputer.accounting.provider.repository.ProviderRepository;
import com.app.brc.brandcomputer.login.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProviderValidator {

    private ProviderRepository providerRepository;

    @Autowired
    public ProviderValidator(ProviderRepository providerRepository) {
        this.providerRepository = providerRepository;
    }

    public boolean validateCIF(String cif) {
        return providerRepository.existsByCIF(cif);
    }

    public ResponseEntity<MessageResponse> returnValidationMessage(String cif) {
        if (cif.trim().length() == 0) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Campul CIF nu este completat"));
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Providerul cu numarul CIF " + cif + " exista deja !"));
        }
    }

    public ResponseEntity<MessageResponse> validateName() {
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Numele providerului trebuie completat !"));
    }

    public ResponseEntity<MessageResponse> validateTradeRegister() {
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Campul Registrul comertului nu este completat !"));
    }

    public ResponseEntity<MessageResponse> validateProviderCode() {
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Campul Cod furnizor nu este completat !"));
    }

    public ResponseEntity<MessageResponse> validateVatPayer() {
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Optiunea platitor de TVA nu este selectata !"));
    }

    public ResponseEntity<MessageResponse> validateCity() {
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Campul Localitate nu este completat !"));
    }

    public ResponseEntity<MessageResponse> validateCounty() {
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Campul Judet nu este completat !"));
    }

    public ResponseEntity<MessageResponse> validateCountry() {
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Campul Tara nu este completat !"));
    }

    public ResponseEntity<MessageResponse> validateStreetAddress() {
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Campul Adresa nu este completat !"));
    }
}
