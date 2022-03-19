package com.claytonmasterson.personal_property.model;


public enum ProductType {

    GENERAL("General"),
    BOOK("Book"),
    CLOTHING("Clothing"),
    ELECTRONICS("Electronics"),
    FURNITURE("Furniture"),
    MUSIC("Music"),
    VIDEO("Video");

    private final String displayName;

    ProductType(final String display) {
        this.displayName = display;
    }

    @Override
    public String toString() {
        return this.displayName;
    }
}
