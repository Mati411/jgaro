package com.bewise.bugtracker;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.bewise.bugtracker");

        noClasses()
            .that()
            .resideInAnyPackage("com.bewise.bugtracker.service..")
            .or()
            .resideInAnyPackage("com.bewise.bugtracker.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.bewise.bugtracker.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
