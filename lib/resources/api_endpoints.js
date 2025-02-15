var _endpoints = {
  "subscription": [
    [
      "create",
      "POST",
      "/subscriptions",
      null,
      false
    ],
    [
      "create_for_customer",
      "POST",
      "/customers",
      "/subscriptions",
      true
    ],
    [
      "create_with_items",
      "POST",
      "/customers",
      "/subscription_for_items",
      true
    ],
    [
      "list",
      "GET",
      "/subscriptions",
      null,
      false
    ],
    [
      "subscriptions_for_customer",
      "GET",
      "/customers",
      "/subscriptions",
      true
    ],
    [
      "contract_terms_for_subscription",
      "GET",
      "/subscriptions",
      "/contract_terms",
      true
    ],
    [
      "list_discounts",
      "GET",
      "/subscriptions",
      "/discounts",
      true
    ],
    [
      "retrieve",
      "GET",
      "/subscriptions",
      null,
      true
    ],
    [
      "retrieve_with_scheduled_changes",
      "GET",
      "/subscriptions",
      "/retrieve_with_scheduled_changes",
      true
    ],
    [
      "remove_scheduled_changes",
      "POST",
      "/subscriptions",
      "/remove_scheduled_changes",
      true
    ],
    [
      "remove_scheduled_cancellation",
      "POST",
      "/subscriptions",
      "/remove_scheduled_cancellation",
      true
    ],
    [
      "remove_coupons",
      "POST",
      "/subscriptions",
      "/remove_coupons",
      true
    ],
    [
      "update",
      "POST",
      "/subscriptions",
      null,
      true
    ],
    [
      "update_for_items",
      "POST",
      "/subscriptions",
      "/update_for_items",
      true
    ],
    [
      "change_term_end",
      "POST",
      "/subscriptions",
      "/change_term_end",
      true
    ],
    [
      "reactivate",
      "POST",
      "/subscriptions",
      "/reactivate",
      true
    ],
    [
      "add_charge_at_term_end",
      "POST",
      "/subscriptions",
      "/add_charge_at_term_end",
      true
    ],
    [
      "charge_addon_at_term_end",
      "POST",
      "/subscriptions",
      "/charge_addon_at_term_end",
      true
    ],
    [
      "charge_future_renewals",
      "POST",
      "/subscriptions",
      "/charge_future_renewals",
      true
    ],
    [
      "edit_advance_invoice_schedule",
      "POST",
      "/subscriptions",
      "/edit_advance_invoice_schedule",
      true
    ],
    [
      "retrieve_advance_invoice_schedule",
      "GET",
      "/subscriptions",
      "/retrieve_advance_invoice_schedule",
      true
    ],
    [
      "remove_advance_invoice_schedule",
      "POST",
      "/subscriptions",
      "/remove_advance_invoice_schedule",
      true
    ],
    [
      "regenerate_invoice",
      "POST",
      "/subscriptions",
      "/regenerate_invoice",
      true
    ],
    [
      "import_subscription",
      "POST",
      "/subscriptions",
      "/import_subscription",
      false
    ],
    [
      "import_for_customer",
      "POST",
      "/customers",
      "/import_subscription",
      true
    ],
    [
      "import_contract_term",
      "POST",
      "/subscriptions",
      "/import_contract_term",
      true
    ],
    [
      "import_unbilled_charges",
      "POST",
      "/subscriptions",
      "/import_unbilled_charges",
      true
    ],
    [
      "import_for_items",
      "POST",
      "/customers",
      "/import_for_items",
      true
    ],
    [
      "override_billing_profile",
      "POST",
      "/subscriptions",
      "/override_billing_profile",
      true
    ],
    [
      "delete",
      "POST",
      "/subscriptions",
      "/delete",
      true
    ],
    [
      "pause",
      "POST",
      "/subscriptions",
      "/pause",
      true
    ],
    [
      "cancel",
      "POST",
      "/subscriptions",
      "/cancel",
      true
    ],
    [
      "cancel_for_items",
      "POST",
      "/subscriptions",
      "/cancel_for_items",
      true
    ],
    [
      "resume",
      "POST",
      "/subscriptions",
      "/resume",
      true
    ],
    [
      "remove_scheduled_pause",
      "POST",
      "/subscriptions",
      "/remove_scheduled_pause",
      true
    ],
    [
      "remove_scheduled_resumption",
      "POST",
      "/subscriptions",
      "/remove_scheduled_resumption",
      true
    ]
  ],
  "contract_term": [],
  "discount": [],
  "advance_invoice_schedule": [],
  "customer": [
    [
      "create",
      "POST",
      "/customers",
      null,
      false
    ],
    [
      "list",
      "GET",
      "/customers",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/customers",
      null,
      true
    ],
    [
      "update",
      "POST",
      "/customers",
      null,
      true
    ],
    [
      "update_payment_method",
      "POST",
      "/customers",
      "/update_payment_method",
      true
    ],
    [
      "update_billing_info",
      "POST",
      "/customers",
      "/update_billing_info",
      true
    ],
    [
      "contacts_for_customer",
      "GET",
      "/customers",
      "/contacts",
      true
    ],
    [
      "assign_payment_role",
      "POST",
      "/customers",
      "/assign_payment_role",
      true
    ],
    [
      "add_contact",
      "POST",
      "/customers",
      "/add_contact",
      true
    ],
    [
      "update_contact",
      "POST",
      "/customers",
      "/update_contact",
      true
    ],
    [
      "delete_contact",
      "POST",
      "/customers",
      "/delete_contact",
      true
    ],
    [
      "add_promotional_credits",
      "POST",
      "/customers",
      "/add_promotional_credits",
      true
    ],
    [
      "deduct_promotional_credits",
      "POST",
      "/customers",
      "/deduct_promotional_credits",
      true
    ],
    [
      "set_promotional_credits",
      "POST",
      "/customers",
      "/set_promotional_credits",
      true
    ],
    [
      "record_excess_payment",
      "POST",
      "/customers",
      "/record_excess_payment",
      true
    ],
    [
      "collect_payment",
      "POST",
      "/customers",
      "/collect_payment",
      true
    ],
    [
      "delete",
      "POST",
      "/customers",
      "/delete",
      true
    ],
    [
      "move",
      "POST",
      "/customers",
      "/move",
      false
    ],
    [
      "change_billing_date",
      "POST",
      "/customers",
      "/change_billing_date",
      true
    ],
    [
      "merge",
      "POST",
      "/customers",
      "/merge",
      false
    ],
    [
      "clear_personal_data",
      "POST",
      "/customers",
      "/clear_personal_data",
      true
    ],
    [
      "relationships",
      "POST",
      "/customers",
      "/relationships",
      true
    ],
    [
      "delete_relationship",
      "POST",
      "/customers",
      "/delete_relationship",
      true
    ],
    [
      "hierarchy",
      "GET",
      "/customers",
      "/hierarchy",
      true
    ],
    [
      "update_hierarchy_settings",
      "POST",
      "/customers",
      "/update_hierarchy_settings",
      true
    ]
  ],
  "hierarchy": [],
  "contact": [],
  "token": [],
  "payment_source": [
    [
      "create_using_temp_token",
      "POST",
      "/payment_sources",
      "/create_using_temp_token",
      false
    ],
    [
      "create_using_permanent_token",
      "POST",
      "/payment_sources",
      "/create_using_permanent_token",
      false
    ],
    [
      "create_using_token",
      "POST",
      "/payment_sources",
      "/create_using_token",
      false
    ],
    [
      "create_using_payment_intent",
      "POST",
      "/payment_sources",
      "/create_using_payment_intent",
      false
    ],
    [
      "create_card",
      "POST",
      "/payment_sources",
      "/create_card",
      false
    ],
    [
      "create_bank_account",
      "POST",
      "/payment_sources",
      "/create_bank_account",
      false
    ],
    [
      "update_card",
      "POST",
      "/payment_sources",
      "/update_card",
      true
    ],
    [
      "update_bank_account",
      "POST",
      "/payment_sources",
      "/update_bank_account",
      true
    ],
    [
      "verify_bank_account",
      "POST",
      "/payment_sources",
      "/verify_bank_account",
      true
    ],
    [
      "retrieve",
      "GET",
      "/payment_sources",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/payment_sources",
      null,
      false
    ],
    [
      "switch_gateway_account",
      "POST",
      "/payment_sources",
      "/switch_gateway_account",
      true
    ],
    [
      "export_payment_source",
      "POST",
      "/payment_sources",
      "/export_payment_source",
      true
    ],
    [
      "delete",
      "POST",
      "/payment_sources",
      "/delete",
      true
    ],
    [
      "delete_local",
      "POST",
      "/payment_sources",
      "/delete_local",
      true
    ]
  ],
  "third_party_payment_method": [],
  "virtual_bank_account": [
    [
      "create_using_permanent_token",
      "POST",
      "/virtual_bank_accounts",
      "/create_using_permanent_token",
      false
    ],
    [
      "create",
      "POST",
      "/virtual_bank_accounts",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/virtual_bank_accounts",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/virtual_bank_accounts",
      null,
      false
    ],
    [
      "delete",
      "POST",
      "/virtual_bank_accounts",
      "/delete",
      true
    ],
    [
      "delete_local",
      "POST",
      "/virtual_bank_accounts",
      "/delete_local",
      true
    ]
  ],
  "card": [
    [
      "retrieve",
      "GET",
      "/cards",
      null,
      true
    ],
    [
      "update_card_for_customer",
      "POST",
      "/customers",
      "/credit_card",
      true
    ],
    [
      "switch_gateway_for_customer",
      "POST",
      "/customers",
      "/switch_gateway",
      true
    ],
    [
      "copy_card_for_customer",
      "POST",
      "/customers",
      "/copy_card",
      true
    ],
    [
      "delete_card_for_customer",
      "POST",
      "/customers",
      "/delete_card",
      true
    ]
  ],
  "promotional_credit": [
    [
      "add",
      "POST",
      "/promotional_credits",
      "/add",
      false
    ],
    [
      "deduct",
      "POST",
      "/promotional_credits",
      "/deduct",
      false
    ],
    [
      "set",
      "POST",
      "/promotional_credits",
      "/set",
      false
    ],
    [
      "list",
      "GET",
      "/promotional_credits",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/promotional_credits",
      null,
      true
    ]
  ],
  "invoice": [
    [
      "create",
      "POST",
      "/invoices",
      null,
      false
    ],
    [
      "create_for_charge_items_and_charges",
      "POST",
      "/invoices",
      "/create_for_charge_items_and_charges",
      false
    ],
    [
      "charge",
      "POST",
      "/invoices",
      "/charge",
      false
    ],
    [
      "charge_addon",
      "POST",
      "/invoices",
      "/charge_addon",
      false
    ],
    [
      "create_for_charge_item",
      "POST",
      "/invoices",
      "/create_for_charge_item",
      false
    ],
    [
      "stop_dunning",
      "POST",
      "/invoices",
      "/stop_dunning",
      true
    ],
    [
      "import_invoice",
      "POST",
      "/invoices",
      "/import_invoice",
      false
    ],
    [
      "apply_payments",
      "POST",
      "/invoices",
      "/apply_payments",
      true
    ],
    [
      "sync_usages",
      "POST",
      "/invoices",
      "/sync_usages",
      true
    ],
    [
      "apply_credits",
      "POST",
      "/invoices",
      "/apply_credits",
      true
    ],
    [
      "list",
      "GET",
      "/invoices",
      null,
      false
    ],
    [
      "invoices_for_customer",
      "GET",
      "/customers",
      "/invoices",
      true
    ],
    [
      "invoices_for_subscription",
      "GET",
      "/subscriptions",
      "/invoices",
      true
    ],
    [
      "retrieve",
      "GET",
      "/invoices",
      null,
      true
    ],
    [
      "pdf",
      "POST",
      "/invoices",
      "/pdf",
      true
    ],
    [
      "download_einvoice",
      "GET",
      "/invoices",
      "/download_einvoice",
      true
    ],
    [
      "add_charge",
      "POST",
      "/invoices",
      "/add_charge",
      true
    ],
    [
      "add_addon_charge",
      "POST",
      "/invoices",
      "/add_addon_charge",
      true
    ],
    [
      "add_charge_item",
      "POST",
      "/invoices",
      "/add_charge_item",
      true
    ],
    [
      "close",
      "POST",
      "/invoices",
      "/close",
      true
    ],
    [
      "collect_payment",
      "POST",
      "/invoices",
      "/collect_payment",
      true
    ],
    [
      "record_payment",
      "POST",
      "/invoices",
      "/record_payment",
      true
    ],
    [
      "refund",
      "POST",
      "/invoices",
      "/refund",
      true
    ],
    [
      "record_refund",
      "POST",
      "/invoices",
      "/record_refund",
      true
    ],
    [
      "remove_payment",
      "POST",
      "/invoices",
      "/remove_payment",
      true
    ],
    [
      "remove_credit_note",
      "POST",
      "/invoices",
      "/remove_credit_note",
      true
    ],
    [
      "void_invoice",
      "POST",
      "/invoices",
      "/void",
      true
    ],
    [
      "write_off",
      "POST",
      "/invoices",
      "/write_off",
      true
    ],
    [
      "delete",
      "POST",
      "/invoices",
      "/delete",
      true
    ],
    [
      "update_details",
      "POST",
      "/invoices",
      "/update_details",
      true
    ],
    [
      "resend_einvoice",
      "POST",
      "/invoices",
      "/resend_einvoice",
      true
    ]
  ],
  "tax_withheld": [],
  "credit_note": [
    [
      "create",
      "POST",
      "/credit_notes",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/credit_notes",
      null,
      true
    ],
    [
      "pdf",
      "POST",
      "/credit_notes",
      "/pdf",
      true
    ],
    [
      "download_einvoice",
      "GET",
      "/credit_notes",
      "/download_einvoice",
      true
    ],
    [
      "refund",
      "POST",
      "/credit_notes",
      "/refund",
      true
    ],
    [
      "record_refund",
      "POST",
      "/credit_notes",
      "/record_refund",
      true
    ],
    [
      "void_credit_note",
      "POST",
      "/credit_notes",
      "/void",
      true
    ],
    [
      "list",
      "GET",
      "/credit_notes",
      null,
      false
    ],
    [
      "credit_notes_for_customer",
      "GET",
      "/customers",
      "/credit_notes",
      true
    ],
    [
      "delete",
      "POST",
      "/credit_notes",
      "/delete",
      true
    ],
    [
      "resend_einvoice",
      "POST",
      "/credit_notes",
      "/resend_einvoice",
      true
    ],
    [
      "import_credit_note",
      "POST",
      "/credit_notes",
      "/import_credit_note",
      false
    ]
  ],
  "unbilled_charge": [
    [
      "create_unbilled_charge",
      "POST",
      "/unbilled_charges",
      "/create",
      false
    ],
    [
      "create",
      "POST",
      "/unbilled_charges",
      null,
      false
    ],
    [
      "invoice_unbilled_charges",
      "POST",
      "/unbilled_charges",
      "/invoice_unbilled_charges",
      false
    ],
    [
      "delete",
      "POST",
      "/unbilled_charges",
      "/delete",
      true
    ],
    [
      "list",
      "GET",
      "/unbilled_charges",
      null,
      false
    ],
    [
      "invoice_now_estimate",
      "POST",
      "/unbilled_charges",
      "/invoice_now_estimate",
      false
    ]
  ],
  "order": [
    [
      "create",
      "POST",
      "/orders",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/orders",
      null,
      true
    ],
    [
      "import_order",
      "POST",
      "/orders",
      "/import_order",
      false
    ],
    [
      "assign_order_number",
      "POST",
      "/orders",
      "/assign_order_number",
      true
    ],
    [
      "cancel",
      "POST",
      "/orders",
      "/cancel",
      true
    ],
    [
      "create_refundable_credit_note",
      "POST",
      "/orders",
      "/create_refundable_credit_note",
      true
    ],
    [
      "reopen",
      "POST",
      "/orders",
      "/reopen",
      true
    ],
    [
      "retrieve",
      "GET",
      "/orders",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/orders",
      "/delete",
      true
    ],
    [
      "list",
      "GET",
      "/orders",
      null,
      false
    ],
    [
      "orders_for_invoice",
      "GET",
      "/invoices",
      "/orders",
      true
    ],
    [
      "resend",
      "POST",
      "/orders",
      "/resend",
      true
    ]
  ],
  "gift": [
    [
      "create",
      "POST",
      "/gifts",
      null,
      false
    ],
    [
      "create_for_items",
      "POST",
      "/gifts",
      "/create_for_items",
      false
    ],
    [
      "retrieve",
      "GET",
      "/gifts",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/gifts",
      null,
      false
    ],
    [
      "claim",
      "POST",
      "/gifts",
      "/claim",
      true
    ],
    [
      "cancel",
      "POST",
      "/gifts",
      "/cancel",
      true
    ],
    [
      "update_gift",
      "POST",
      "/gifts",
      "/update_gift",
      true
    ]
  ],
  "transaction": [
    [
      "create_authorization",
      "POST",
      "/transactions",
      "/create_authorization",
      false
    ],
    [
      "void_transaction",
      "POST",
      "/transactions",
      "/void",
      true
    ],
    [
      "record_refund",
      "POST",
      "/transactions",
      "/record_refund",
      true
    ],
    [
      "refund",
      "POST",
      "/transactions",
      "/refund",
      true
    ],
    [
      "list",
      "GET",
      "/transactions",
      null,
      false
    ],
    [
      "transactions_for_customer",
      "GET",
      "/customers",
      "/transactions",
      true
    ],
    [
      "transactions_for_subscription",
      "GET",
      "/subscriptions",
      "/transactions",
      true
    ],
    [
      "payments_for_invoice",
      "GET",
      "/invoices",
      "/payments",
      true
    ],
    [
      "retrieve",
      "GET",
      "/transactions",
      null,
      true
    ],
    [
      "delete_offline_transaction",
      "POST",
      "/transactions",
      "/delete_offline_transaction",
      true
    ]
  ],
  "hosted_page": [
    [
      "checkout_new",
      "POST",
      "/hosted_pages",
      "/checkout_new",
      false
    ],
    [
      "checkout_one_time",
      "POST",
      "/hosted_pages",
      "/checkout_one_time",
      false
    ],
    [
      "checkout_one_time_for_items",
      "POST",
      "/hosted_pages",
      "/checkout_one_time_for_items",
      false
    ],
    [
      "checkout_new_for_items",
      "POST",
      "/hosted_pages",
      "/checkout_new_for_items",
      false
    ],
    [
      "checkout_existing",
      "POST",
      "/hosted_pages",
      "/checkout_existing",
      false
    ],
    [
      "checkout_existing_for_items",
      "POST",
      "/hosted_pages",
      "/checkout_existing_for_items",
      false
    ],
    [
      "update_card",
      "POST",
      "/hosted_pages",
      "/update_card",
      false
    ],
    [
      "update_payment_method",
      "POST",
      "/hosted_pages",
      "/update_payment_method",
      false
    ],
    [
      "manage_payment_sources",
      "POST",
      "/hosted_pages",
      "/manage_payment_sources",
      false
    ],
    [
      "collect_now",
      "POST",
      "/hosted_pages",
      "/collect_now",
      false
    ],
    [
      "accept_quote",
      "POST",
      "/hosted_pages",
      "/accept_quote",
      false
    ],
    [
      "extend_subscription",
      "POST",
      "/hosted_pages",
      "/extend_subscription",
      false
    ],
    [
      "checkout_gift",
      "POST",
      "/hosted_pages",
      "/checkout_gift",
      false
    ],
    [
      "checkout_gift_for_items",
      "POST",
      "/hosted_pages",
      "/checkout_gift_for_items",
      false
    ],
    [
      "claim_gift",
      "POST",
      "/hosted_pages",
      "/claim_gift",
      false
    ],
    [
      "retrieve_agreement_pdf",
      "POST",
      "/hosted_pages",
      "/retrieve_agreement_pdf",
      false
    ],
    [
      "acknowledge",
      "POST",
      "/hosted_pages",
      "/acknowledge",
      true
    ],
    [
      "retrieve",
      "GET",
      "/hosted_pages",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/hosted_pages",
      null,
      false
    ],
    [
      "pre_cancel",
      "POST",
      "/hosted_pages",
      "/pre_cancel",
      false
    ]
  ],
  "estimate": [
    [
      "create_subscription",
      "POST",
      "/estimates",
      "/create_subscription",
      false
    ],
    [
      "create_sub_item_estimate",
      "POST",
      "/estimates",
      "/create_subscription_for_items",
      false
    ],
    [
      "create_sub_for_customer_estimate",
      "GET",
      "/customers",
      "/create_subscription_estimate",
      true
    ],
    [
      "create_sub_item_for_customer_estimate",
      "POST",
      "/customers",
      "/create_subscription_for_items_estimate",
      true
    ],
    [
      "update_subscription",
      "POST",
      "/estimates",
      "/update_subscription",
      false
    ],
    [
      "update_subscription_for_items",
      "POST",
      "/estimates",
      "/update_subscription_for_items",
      false
    ],
    [
      "renewal_estimate",
      "GET",
      "/subscriptions",
      "/renewal_estimate",
      true
    ],
    [
      "advance_invoice_estimate",
      "POST",
      "/subscriptions",
      "/advance_invoice_estimate",
      true
    ],
    [
      "regenerate_invoice_estimate",
      "POST",
      "/subscriptions",
      "/regenerate_invoice_estimate",
      true
    ],
    [
      "upcoming_invoices_estimate",
      "GET",
      "/customers",
      "/upcoming_invoices_estimate",
      true
    ],
    [
      "change_term_end",
      "POST",
      "/subscriptions",
      "/change_term_end_estimate",
      true
    ],
    [
      "cancel_subscription",
      "POST",
      "/subscriptions",
      "/cancel_subscription_estimate",
      true
    ],
    [
      "cancel_subscription_for_items",
      "POST",
      "/subscriptions",
      "/cancel_subscription_for_items_estimate",
      true
    ],
    [
      "pause_subscription",
      "POST",
      "/subscriptions",
      "/pause_subscription_estimate",
      true
    ],
    [
      "resume_subscription",
      "POST",
      "/subscriptions",
      "/resume_subscription_estimate",
      true
    ],
    [
      "gift_subscription",
      "POST",
      "/estimates",
      "/gift_subscription",
      false
    ],
    [
      "gift_subscription_for_items",
      "POST",
      "/estimates",
      "/gift_subscription_for_items",
      false
    ],
    [
      "create_invoice",
      "POST",
      "/estimates",
      "/create_invoice",
      false
    ],
    [
      "create_invoice_for_items",
      "POST",
      "/estimates",
      "/create_invoice_for_items",
      false
    ]
  ],
  "quote": [
    [
      "retrieve",
      "GET",
      "/quotes",
      null,
      true
    ],
    [
      "create_sub_for_customer_quote",
      "POST",
      "/customers",
      "/create_subscription_quote",
      true
    ],
    [
      "edit_create_sub_for_customer_quote",
      "POST",
      "/quotes",
      "/edit_create_subscription_quote",
      true
    ],
    [
      "update_subscription_quote",
      "POST",
      "/quotes",
      "/update_subscription_quote",
      false
    ],
    [
      "edit_update_subscription_quote",
      "POST",
      "/quotes",
      "/edit_update_subscription_quote",
      true
    ],
    [
      "create_for_onetime_charges",
      "POST",
      "/quotes",
      "/create_for_onetime_charges",
      false
    ],
    [
      "edit_one_time_quote",
      "POST",
      "/quotes",
      "/edit_one_time_quote",
      true
    ],
    [
      "create_sub_items_for_customer_quote",
      "POST",
      "/customers",
      "/create_subscription_quote_for_items",
      true
    ],
    [
      "edit_create_sub_customer_quote_for_items",
      "POST",
      "/quotes",
      "/edit_create_subscription_quote_for_items",
      true
    ],
    [
      "update_subscription_quote_for_items",
      "POST",
      "/quotes",
      "/update_subscription_quote_for_items",
      false
    ],
    [
      "edit_update_subscription_quote_for_items",
      "POST",
      "/quotes",
      "/edit_update_subscription_quote_for_items",
      true
    ],
    [
      "create_for_charge_items_and_charges",
      "POST",
      "/quotes",
      "/create_for_charge_items_and_charges",
      false
    ],
    [
      "edit_for_charge_items_and_charges",
      "POST",
      "/quotes",
      "/edit_for_charge_items_and_charges",
      true
    ],
    [
      "list",
      "GET",
      "/quotes",
      null,
      false
    ],
    [
      "quote_line_groups_for_quote",
      "GET",
      "/quotes",
      "/quote_line_groups",
      true
    ],
    [
      "convert",
      "POST",
      "/quotes",
      "/convert",
      true
    ],
    [
      "update_status",
      "POST",
      "/quotes",
      "/update_status",
      true
    ],
    [
      "extend_expiry_date",
      "POST",
      "/quotes",
      "/extend_expiry_date",
      true
    ],
    [
      "delete",
      "POST",
      "/quotes",
      "/delete",
      true
    ],
    [
      "pdf",
      "POST",
      "/quotes",
      "/pdf",
      true
    ]
  ],
  "quoted_subscription": [],
  "quoted_charge": [],
  "quote_line_group": [],
  "plan": [
    [
      "create",
      "POST",
      "/plans",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/plans",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/plans",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/plans",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/plans",
      "/delete",
      true
    ],
    [
      "copy",
      "POST",
      "/plans",
      "/copy",
      false
    ],
    [
      "unarchive",
      "POST",
      "/plans",
      "/unarchive",
      true
    ]
  ],
  "addon": [
    [
      "create",
      "POST",
      "/addons",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/addons",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/addons",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/addons",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/addons",
      "/delete",
      true
    ],
    [
      "copy",
      "POST",
      "/addons",
      "/copy",
      false
    ],
    [
      "unarchive",
      "POST",
      "/addons",
      "/unarchive",
      true
    ]
  ],
  "coupon": [
    [
      "create",
      "POST",
      "/coupons",
      null,
      false
    ],
    [
      "create_for_items",
      "POST",
      "/coupons",
      "/create_for_items",
      false
    ],
    [
      "update_for_items",
      "POST",
      "/coupons",
      "/update_for_items",
      true
    ],
    [
      "list",
      "GET",
      "/coupons",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/coupons",
      null,
      true
    ],
    [
      "update",
      "POST",
      "/coupons",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/coupons",
      "/delete",
      true
    ],
    [
      "copy",
      "POST",
      "/coupons",
      "/copy",
      false
    ],
    [
      "unarchive",
      "POST",
      "/coupons",
      "/unarchive",
      true
    ]
  ],
  "coupon_set": [
    [
      "create",
      "POST",
      "/coupon_sets",
      null,
      false
    ],
    [
      "add_coupon_codes",
      "POST",
      "/coupon_sets",
      "/add_coupon_codes",
      true
    ],
    [
      "list",
      "GET",
      "/coupon_sets",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/coupon_sets",
      null,
      true
    ],
    [
      "update",
      "POST",
      "/coupon_sets",
      "/update",
      true
    ],
    [
      "delete",
      "POST",
      "/coupon_sets",
      "/delete",
      true
    ],
    [
      "delete_unused_coupon_codes",
      "POST",
      "/coupon_sets",
      "/delete_unused_coupon_codes",
      true
    ]
  ],
  "coupon_code": [
    [
      "create",
      "POST",
      "/coupon_codes",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/coupon_codes",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/coupon_codes",
      null,
      false
    ],
    [
      "archive",
      "POST",
      "/coupon_codes",
      "/archive",
      true
    ]
  ],
  "address": [
    [
      "retrieve",
      "GET",
      "/addresses",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/addresses",
      null,
      false
    ]
  ],
  "usage": [
    [
      "create",
      "POST",
      "/subscriptions",
      "/usages",
      true
    ],
    [
      "retrieve",
      "GET",
      "/subscriptions",
      "/usages",
      true
    ],
    [
      "delete",
      "POST",
      "/subscriptions",
      "/delete_usage",
      true
    ],
    [
      "list",
      "GET",
      "/usages",
      null,
      false
    ],
    [
      "pdf",
      "POST",
      "/usages",
      "/pdf",
      false
    ]
  ],
  "event": [
    [
      "list",
      "GET",
      "/events",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/events",
      null,
      true
    ]
  ],
  "comment": [
    [
      "create",
      "POST",
      "/comments",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/comments",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/comments",
      null,
      false
    ],
    [
      "delete",
      "POST",
      "/comments",
      "/delete",
      true
    ]
  ],
  "download": [],
  "portal_session": [
    [
      "create",
      "POST",
      "/portal_sessions",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/portal_sessions",
      null,
      true
    ],
    [
      "logout",
      "POST",
      "/portal_sessions",
      "/logout",
      true
    ],
    [
      "activate",
      "POST",
      "/portal_sessions",
      "/activate",
      true
    ]
  ],
  "site_migration_detail": [[
    "list",
    "GET",
    "/site_migration_details",
    null,
    false
  ]],
  "resource_migration": [[
    "retrieve_latest",
    "GET",
    "/resource_migrations",
    "/retrieve_latest",
    false
  ]],
  "time_machine": [
    [
      "retrieve",
      "GET",
      "/time_machines",
      null,
      true
    ],
    [
      "start_afresh",
      "POST",
      "/time_machines",
      "/start_afresh",
      true
    ],
    [
      "travel_forward",
      "POST",
      "/time_machines",
      "/travel_forward",
      true
    ]
  ],
  "export": [
    [
      "retrieve",
      "GET",
      "/exports",
      null,
      true
    ],
    [
      "revenue_recognition",
      "POST",
      "/exports",
      "/revenue_recognition",
      false
    ],
    [
      "deferred_revenue",
      "POST",
      "/exports",
      "/deferred_revenue",
      false
    ],
    [
      "plans",
      "POST",
      "/exports",
      "/plans",
      false
    ],
    [
      "addons",
      "POST",
      "/exports",
      "/addons",
      false
    ],
    [
      "coupons",
      "POST",
      "/exports",
      "/coupons",
      false
    ],
    [
      "customers",
      "POST",
      "/exports",
      "/customers",
      false
    ],
    [
      "subscriptions",
      "POST",
      "/exports",
      "/subscriptions",
      false
    ],
    [
      "invoices",
      "POST",
      "/exports",
      "/invoices",
      false
    ],
    [
      "credit_notes",
      "POST",
      "/exports",
      "/credit_notes",
      false
    ],
    [
      "transactions",
      "POST",
      "/exports",
      "/transactions",
      false
    ],
    [
      "orders",
      "POST",
      "/exports",
      "/orders",
      false
    ],
    [
      "item_families",
      "POST",
      "/exports",
      "/item_families",
      false
    ],
    [
      "items",
      "POST",
      "/exports",
      "/items",
      false
    ],
    [
      "item_prices",
      "POST",
      "/exports",
      "/item_prices",
      false
    ],
    [
      "attached_items",
      "POST",
      "/exports",
      "/attached_items",
      false
    ],
    [
      "differential_prices",
      "POST",
      "/exports",
      "/differential_prices",
      false
    ]
  ],
  "payment_intent": [
    [
      "create",
      "POST",
      "/payment_intents",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/payment_intents",
      null,
      true
    ],
    [
      "retrieve",
      "GET",
      "/payment_intents",
      null,
      true
    ]
  ],
  "item_family": [
    [
      "create",
      "POST",
      "/item_families",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/item_families",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/item_families",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/item_families",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/item_families",
      "/delete",
      true
    ]
  ],
  "item": [
    [
      "create",
      "POST",
      "/items",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/items",
      null,
      true
    ],
    [
      "update",
      "POST",
      "/items",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/items",
      null,
      false
    ],
    [
      "delete",
      "POST",
      "/items",
      "/delete",
      true
    ]
  ],
  "item_price": [
    [
      "create",
      "POST",
      "/item_prices",
      null,
      false
    ],
    [
      "retrieve",
      "GET",
      "/item_prices",
      null,
      true
    ],
    [
      "update",
      "POST",
      "/item_prices",
      null,
      true
    ],
    [
      "list",
      "GET",
      "/item_prices",
      null,
      false
    ],
    [
      "delete",
      "POST",
      "/item_prices",
      "/delete",
      true
    ],
    [
      "find_applicable_items",
      "GET",
      "/item_prices",
      "/applicable_items",
      true
    ],
    [
      "find_applicable_item_prices",
      "GET",
      "/item_prices",
      "/applicable_item_prices",
      true
    ]
  ],
  "attached_item": [
    [
      "create",
      "POST",
      "/items",
      "/attached_items",
      true
    ],
    [
      "update",
      "POST",
      "/attached_items",
      null,
      true
    ],
    [
      "retrieve",
      "GET",
      "/attached_items",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/attached_items",
      "/delete",
      true
    ],
    [
      "list",
      "GET",
      "/items",
      "/attached_items",
      true
    ]
  ],
  "differential_price": [
    [
      "create",
      "POST",
      "/item_prices",
      "/differential_prices",
      true
    ],
    [
      "retrieve",
      "GET",
      "/differential_prices",
      null,
      true
    ],
    [
      "update",
      "POST",
      "/differential_prices",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/differential_prices",
      "/delete",
      true
    ],
    [
      "list",
      "GET",
      "/differential_prices",
      null,
      false
    ]
  ],
  "feature": [
    [
      "list",
      "GET",
      "/features",
      null,
      false
    ],
    [
      "create",
      "POST",
      "/features",
      null,
      false
    ],
    [
      "update",
      "POST",
      "/features",
      null,
      true
    ],
    [
      "retrieve",
      "GET",
      "/features",
      null,
      true
    ],
    [
      "delete",
      "POST",
      "/features",
      "/delete",
      true
    ],
    [
      "activate",
      "POST",
      "/features",
      "/activate_command",
      true
    ],
    [
      "archive",
      "POST",
      "/features",
      "/archive_command",
      true
    ],
    [
      "reactivate",
      "POST",
      "/features",
      "/reactivate_command",
      true
    ]
  ],
  "impacted_subscription": [],
  "impacted_item": [],
  "subscription_entitlement": [
    [
      "subscription_entitlements_for_subscription",
      "GET",
      "/subscriptions",
      "/subscription_entitlements",
      true
    ],
    [
      "set_subscription_entitlement_availability",
      "POST",
      "/subscriptions",
      "/subscription_entitlements/set_availability",
      true
    ]
  ],
  "item_entitlement": [
    [
      "item_entitlements_for_item",
      "GET",
      "/items",
      "/item_entitlements",
      true
    ],
    [
      "item_entitlements_for_feature",
      "GET",
      "/features",
      "/item_entitlements",
      true
    ],
    [
      "add_item_entitlements",
      "POST",
      "/features",
      "/item_entitlements",
      true
    ],
    [
      "upsert_or_remove_item_entitlements_for_item",
      "POST",
      "/items",
      "/item_entitlements",
      true
    ]
  ],
  "in_app_subscription": [
    [
      "process_receipt",
      "POST",
      "/in_app_subscriptions",
      "/process_purchase_command",
      true
    ],
    [
      "import_receipt",
      "POST",
      "/in_app_subscriptions",
      "/import_receipt",
      true
    ]
  ],
  "entitlement_override": [
    [
      "add_entitlement_override_for_subscription",
      "POST",
      "/subscriptions",
      "/entitlement_overrides",
      true
    ],
    [
      "list_entitlement_override_for_subscription",
      "GET",
      "/subscriptions",
      "/entitlement_overrides",
      true
    ]
  ],
  "purchase": [
    [
      "create",
      "POST",
      "/purchases",
      null,
      false
    ],
    [
      "estimate",
      "POST",
      "/purchases",
      "/estimate",
      false
    ]
  ]
};
module.exports = _endpoints;