// File generated from our OpenAPI spec

declare namespace Stripe {
  /**
   * `Refund` objects allow you to refund a charge that has previously been created
   * but not yet refunded. Funds will be refunded to the credit or debit card that
   * was originally charged.
   *
   * Related guide: [Refunds](https://stripe.com/docs/refunds).
   */
  interface Refund {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'refund';

    /**
     * Amount, in %s.
     */
    amount: number;

    /**
     * Balance transaction that describes the impact on your account balance.
     */
    balance_transaction: string | Stripe.BalanceTransaction | null;

    /**
     * ID of the charge that was refunded.
     */
    charge: string | Stripe.Charge | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users. (Available on non-card refunds only)
     */
    description?: string;

    /**
     * If the refund failed, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction.
     */
    failure_balance_transaction?: string | Stripe.BalanceTransaction;

    /**
     * If the refund failed, the reason for refund failure if known. Possible values are `lost_or_stolen_card`, `expired_or_canceled_card`, `charge_for_pending_refund_disputed`, `insufficient_funds`, `declined`, `merchant_request` or `unknown`.
     */
    failure_reason?: string;

    /**
     * Email to which refund instructions, if required, are sent to.
     */
    instructions_email?: string;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata | null;

    next_action?: Refund.NextAction;

    /**
     * ID of the PaymentIntent that was refunded.
     */
    payment_intent: string | Stripe.PaymentIntent | null;

    /**
     * Reason for the refund, either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`).
     */
    reason: Refund.Reason | null;

    /**
     * This is the transaction number that appears on email receipts sent for this refund.
     */
    receipt_number: string | null;

    /**
     * The transfer reversal that is associated with the refund. Only present if the charge came from another Stripe account. See the Connect documentation for details.
     */
    source_transfer_reversal: string | Stripe.TransferReversal | null;

    /**
     * Status of the refund. For credit card refunds, this can be `pending`, `succeeded`, or `failed`. For other types of refunds, it can be `pending`, `requires_action`, `succeeded`, `failed`, or `canceled`. Refer to our [refunds](https://stripe.com/docs/refunds#failed-refunds) documentation for more details.
     */
    status: string | null;

    /**
     * If the accompanying transfer was reversed, the transfer reversal object. Only applicable if the charge was created using the destination parameter.
     */
    transfer_reversal: string | Stripe.TransferReversal | null;
  }

  namespace Refund {
    interface NextAction {
      /**
       * Contains the refund details.
       */
      display_details: NextAction.DisplayDetails | null;

      /**
       * Type of the next action to perform.
       */
      type: string;
    }

    namespace NextAction {
      interface DisplayDetails {
        email_sent: DisplayDetails.EmailSent;

        /**
         * The expiry timestamp.
         */
        expires_at: number;
      }

      namespace DisplayDetails {
        interface EmailSent {
          /**
           * The timestamp when the email was sent.
           */
          email_sent_at: number;

          /**
           * The recipient's email address.
           */
          email_sent_to: string;
        }
      }
    }

    type Reason =
      | 'duplicate'
      | 'expired_uncaptured_charge'
      | 'fraudulent'
      | 'requested_by_customer';
  }
}
